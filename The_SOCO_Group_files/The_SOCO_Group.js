// Created by iWeb 3.0.4 local-build-20120628

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/scottmcowen/Desktop/Scott_McOwen/The_SOCO_Group_files/rss.xml",true);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/scottmcowen/Desktop/Scott_McOwen',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/scottmcowen/Desktop/Scott_McOwen',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(4,new IWSize(143,143),new IWSize(143,28),new IWSize(162,186),27,27,0,new IWSize(14,10)),new IWPhotoFrame([IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_01.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_02.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_03.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_06.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_09.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_08.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_07.png'),IWCreateImage('The_SOCO_Group_files/Portfolio_Frame_04.png')],null,2,0.450000,0.000000,20.000000,10.000000,20.000000,22.000000,31.000000,19.000000,31.000000,407.000000,320.000000,407.000000,320.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,274),url:'The_SOCO_Group_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'The_SOCO_Group_files/stroke_1.png'},{rect:new IWRect(5,-5,151,10),url:'The_SOCO_Group_files/stroke_2.png'},{rect:new IWRect(156,-5,10,10),url:'The_SOCO_Group_files/stroke_3.png'},{rect:new IWRect(156,5,10,274),url:'The_SOCO_Group_files/stroke_4.png'},{rect:new IWRect(156,279,10,10),url:'The_SOCO_Group_files/stroke_5.png'},{rect:new IWRect(5,279,151,10),url:'The_SOCO_Group_files/stroke_6.png'},{rect:new IWRect(-5,279,10,10),url:'The_SOCO_Group_files/stroke_7.png'}],new IWSize(161,284))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('The_SOCO_Group_files/The_SOCO_GroupMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();applyEffects()
initializeMediaStream_id2()}
function onPageUnload()
{Widget.onunload();}
