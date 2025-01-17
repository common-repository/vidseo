<div class="vidseo-segment">
<h2 class="vidseo_heading"><?php echo  esc_html__( 'STEP 2: Custom Settings for Youtube & Vimeo videos', 'vidseo' ) ;?></h2>

<div class="vidseo-row">

    <div class="vidseo-column col-4">

        <span class="vidseo-label"><?php
            echo  esc_html__( 'Player Width', 'vidseo' ) ;
        ?></span>

        <div class="vidseo-tooltip">

        <span class="dashicons dashicons-editor-help"></span>

        <span class="vidseo-tooltiptext">
            <?php echo  __( 'Include "px" or "%" at the end. e.g: 550px or 100%.', 'vidseo' ); ?>
        </span>

        </div>

    </div>

    <div class="vidseo-column col-8">
        
        <input type="text" name="vidseo_width" id="vidseo_width" class="vidseo-field" value="<?php echo $options::get('vidseo_width'); ?>" placeholder="560px">

        &nbsp;
        <span><?php echo  esc_html__( 'Define width in pixels or percentage. e.g: 560px or 100%', 'vidseo' ); ?></span>

    </div>

</div>

<div class="vidseo-row">
    
    <div class="vidseo-column col-4">
    
        <span class="vidseo-label">
            <?php  echo  esc_html__( 'Autoplay Video', 'vidseo' ); ?>
        </span>
    
        <div class="vidseo-tooltip">

            <span class="dashicons dashicons-editor-help"></span>

            <span class="vidseo-tooltiptext">
                <?php echo  __( 'This option will turn on auto play feature for all videos', 'vidseo' ); ?>
            </span>

        </div>

    </div>

    <div class="vidseo-column col-8">
        
        <label class="vidseo-switch">

            <input type="checkbox" id="vidseo_autoplay" name="vidseo_autoplay" value="true" <?php if ( $options::check('vidseo_autoplay') ) { echo  'checked' ;  } ?> />
            
            <span class="vidseo-slider vidseo-round"></span>

        </label>
        &nbsp;
        <span><?php echo  esc_html__( 'Turn ON autoplay by default on all videos.', 'vidseo' ); ?></span>
    
    </div>

</div>

<div class="vidseo-row">
    
    <div class="vidseo-column col-4">
    
        <span class="vidseo-label">
            <?php  echo  esc_html__( 'Loop Videos', 'vidseo' ); ?>
        </span>
    
        <div class="vidseo-tooltip">

            <span class="dashicons dashicons-editor-help"></span>

            <span class="vidseo-tooltiptext">
                <?php echo  __( 'This option will turn on auto loop for all videos', 'vidseo' ); ?>
            </span>

        </div>

    </div>

    <div class="vidseo-column col-8">
        
        <label class="vidseo-switch">

            <input type="checkbox" id="vidseo_loop" name="vidseo_loop" value="true" <?php if ( $options::check('vidseo_loop') ) { echo  'checked' ;  } ?> />
            
            <span class="vidseo-slider vidseo-round"></span>

        </label>
        &nbsp;
        <span><?php echo  esc_html__( 'Enable loop by default for all videos.', 'vidseo' ); ?></span>
    
    </div>

</div>

<div class="vidseo-row">
    
    <div class="vidseo-column col-4">
    
        <span class="vidseo-label">
            <?php  echo  esc_html__( 'Enable Captions/Subtitles', 'vidseo' ); ?>
        </span>
    
        <div class="vidseo-tooltip">

            <span class="dashicons dashicons-editor-help"></span>

            <span class="vidseo-tooltiptext">
                <?php echo  __( 'This option will turn on Captions/Subtitles on all videos. Note for Vimeo User: "For now" only English language is auto enabled. We will add an option for other language soon. Users are allowed to manually choose any language from CC button displayed on Player.', 'vidseo' ); ?>
            </span>

        </div>

    </div>

    <div class="vidseo-column col-8">
        
        <label class="vidseo-switch">

            <input type="checkbox" id="vidseo_captions" name="vidseo_captions" value="true" <?php if ( $options::check('vidseo_captions') ) { echo  'checked' ;  } ?> />
            
            <span class="vidseo-slider vidseo-round"></span>

        </label>
        &nbsp;
        <span><?php echo  esc_html__( 'Enable Captions/Subtitle by default for all videos.', 'vidseo' ); ?></span>
    
    </div>

</div>

